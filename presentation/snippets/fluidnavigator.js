import { 
  FluidNavigator,
  Transition 
} from "react-navigation-fluid-transitions";

// drop-in replacement for StackNavigator
const Navigator = FluidNavigator(sceneConfig);

// ... snip ...
const Somewhere = () => {
  <Transition shared="list-to-header">
    <ListItem />
  </Transition>;
};

// ... elsewhere ...
const Somewhere = () => {
  <Transition shared="list-to-header">
    <Header />
  </Transition>;
};

// ... also ...

const  = () => {
  <Transition appear="top">
    <Icon />
  </Transition>;
};
