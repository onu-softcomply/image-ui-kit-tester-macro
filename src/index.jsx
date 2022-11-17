import ForgeUI, { render, Fragment, Macro, Text, Image } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
      <Image
        src='https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif'
        alt='homer'
      />
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
