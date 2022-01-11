import * as React from 'react';
import styled from 'styled-components';
import * as rx from 'rxjs';

const subject = new rx.Subject();

const behaviorSubject = new rx.BehaviorSubject([]);

const Patterns = () => {
	const { code }: { code: string[] } = require('./code.json');
	console.log(code);
	return (
		<>
			<div className="layout">
				<div className="content">
					<h2>Collection of patterns and ideas</h2>
				</div>
				{code.map((line, index) => (
					<p key={index}>{line}</p>
				))}
			</div>
		</>
	);
};

export default Patterns;
