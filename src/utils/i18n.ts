import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { i18n } from "../../next-i18next.config"

export const getStaticPropsTranslations = async (
  locale: string = i18n.defaultLocale,
) => ({ ...(await serverSideTranslations(locale, ["common"])) })
