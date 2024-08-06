import { render } from "@testing-library/react";
import NavBar from "../NavBar";
import Home from "../Home";
import Foot from "../Foot";

describe('SnapShot testing', () => {
  it('NavBar', () => {
    const NavBarComp= render(<NavBar/>);
    expect(NavBarComp).toMatchSnapshot();
  });
  it('Home', () => {
    const HomeComp= render(<Home/>);
    expect(HomeComp).toMatchSnapshot();
  });
  it('Foot', () => {
    const FootComp= render(<Foot/>);
    expect(FootComp).toMatchSnapshot();
  });
});
