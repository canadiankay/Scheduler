import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "index.scss";
import Button from "components/Button";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  // default button
  .add("Base", () => <Button>Base</Button>)

  // uses confirm prop to apply the .button--confirm modifier class 
  // this JSX will generate a button that is passed confirm = true as a prop but instead of writing confirm={true} we can jutst write confirm
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  // this is the resulting HTML
  // <button class="button button--confirm">Confirm</button>
  
  // uses danger prop to apply the .button--danger modifier class 
  .add("Danger", () => <Button danger>Cancel</Button>)
  
  // uses onClick prop to handle the button click event 
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  
  // uses the disabled prop to apply the disabled attribute to the button element
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));
