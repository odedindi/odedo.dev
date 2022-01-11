import { MDXProvider } from '@mdx-js/react';
import components from 'components/MdxComponents/mdxComponents';

const Mdx: React.FC = ({ children }) => (
	<MDXProvider components={components}>{children}</MDXProvider>
);
export default Mdx;
