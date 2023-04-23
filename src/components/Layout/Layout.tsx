interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 grid-rows-3">
      <div className="col-span-12">
        <h1>Aurmor Learning Center</h1>
      </div>
      <div className="col-span-12">{children}</div>
      <div className="col-span-12">
        <h3>Footer</h3>
      </div>
    </div>
  );
};

export default Layout;
