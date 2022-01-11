import FlipOverCard from 'components/FilpOverCard';
import { Editor as ProperViewer } from 'Projects/EditorViewer';
import * as React from 'react';
import * as rx from 'rxjs';
import styled from 'styled-components';
import * as S from './styles';

export const Chapter = () => {
	return (
		<div>
			<S.Article>
				<S.Title>Observables.</S.Title>
				<S.P>Ways to create Observables and data composition </S.P>
				<S.P></S.P>
				<S.P></S.P>
				<S.P> </S.P>
			</S.Article>

			<S.Divider />
			<S.Article>
				<S.Title>Examples</S.Title>
				<S.Code></S.Code>
				<S.P></S.P>
				<S.Code></S.Code>

				<S.CardContianer>
					{([] as any[]).map((m, index) => (
						<FlipOverCard
							width="8rem"
							height="8rem"
							key={m.url}
							front={
								<div>
									{index + 1}
									<S.P>{m.ups}</S.P>
								</div>
							}
							backgroundUrlBack={m.url}
						/>
					))}
				</S.CardContianer>

				<S.P></S.P>
				<S.P></S.P>
				<S.Code></S.Code>
			</S.Article>
		</div>
	);
};
