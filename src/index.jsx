import { createRoot } from 'react-dom/client';
import { Fragment } from 'react';

const root = createRoot(document.querySelector("#root"));

function MainContent() {
  return (
    <Fragment>
      <h1>Fun facts about being a WebDev</h1>
      <ul>
        <li>You do not have to own a macbook</li>
        <li>You do not have to cover your laptop in stickers that you bought on Rebubble</li>
        <li>You can take pictures without starting a blog about digital photography</li>
        <li>Buying pre-roasted coffee for your espresso machine is just fine</li>
        <li>It's possible to have hobbies other than hiking, rock climbing, or cycling.</li>
      </ul>
    </Fragment>
  )
}

function GenericFooter() {
  return (
    <footer>
      <small>Copyright 2026 BleepBlorp Industries. This table has been reserved.</small>
    </footer>
  )
}


root.render(
  <div>
    <img src='../src/assets/to-do-list.png' width='100' alt='ds tengwar logo' className='logo' />
    <MainContent />
    <GenericFooter />
  </div>
);
