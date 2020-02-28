import Adapter from "enzyme-adapter-react-16";
import { configure} from 'enzyme';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

