// ============================================================================
// GITHUB CONTRIBUTIONS FETCHER
// Fetches real contribution data via GitHub GraphQL API.
// Cached with ISR (revalidates daily) — runs server-side only.
// ============================================================================

export type ContributionLevel =
	| "NONE"
	| "FIRST_QUARTILE"
	| "SECOND_QUARTILE"
	| "THIRD_QUARTILE"
	| "FOURTH_QUARTILE";

export interface ContributionDay {
	date: string;
	contributionCount: number;
	contributionLevel: ContributionLevel;
}

export interface ContributionWeek {
	contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
	totalContributions: number;
	weeks: ContributionWeek[];
}

/** Maps GitHub's contribution level enum to a 0–4 intensity integer */
export const LEVEL_MAP: Record<ContributionLevel, number> = {
	NONE: 0,
	FIRST_QUARTILE: 1,
	SECOND_QUARTILE: 2,
	THIRD_QUARTILE: 3,
	FOURTH_QUARTILE: 4,
};

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const CONTRIBUTIONS_QUERY = `
  query($userName: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $userName) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              contributionLevel
              date
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetches the GitHub contribution calendar for a given user and year.
 * Returns null on failure so callers can fall back gracefully.
 *
 * Requires GITHUB_PAT env var — a classic PAT with no scopes (public data only).
 * Cached with ISR: revalidates once per day.
 */
export async function fetchContributions(
	username: string,
	year: number,
): Promise<ContributionCalendar | null> {
	const pat = process.env.GITHUB_PAT;
	if (!pat) {
		console.warn("[github] GITHUB_PAT not set — skipping contribution fetch");
		return null;
	}

	const from = `${year}-01-01T00:00:00Z`;
	const to = `${year}-12-31T23:59:59Z`;

	try {
		const res = await fetch(GITHUB_GRAPHQL_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${pat}`,
			},
			body: JSON.stringify({
				query: CONTRIBUTIONS_QUERY,
				variables: { userName: username, from, to },
			}),
			// ISR: revalidate once per day
			next: { revalidate: 86400 },
		});

		if (!res.ok) {
			console.error(
				"[github] GraphQL request failed:",
				res.status,
				res.statusText,
			);
			return null;
		}

		const json = await res.json();

		if (json.errors) {
			console.error("[github] GraphQL errors:", json.errors);
			return null;
		}

		const calendar: ContributionCalendar =
			json?.data?.user?.contributionsCollection?.contributionCalendar;

		return calendar ?? null;
	} catch (err) {
		console.error("[github] fetch threw:", err);
		return null;
	}
}
