import React from 'react';
import { render } from 'react-dom';

import {
  AppExtensionSDK,
  FieldExtensionSDK,
  BaseExtensionSDK,
  init,
  locations
} from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import '@contentful/forma-36-tokens/dist/css/index.css';
import './index.css';

import Config from './components/ConfigScreen';
import Page from './components/Page';
import Sidebar from './components/Sidebar';
import Field from './components/Field';
import Dialog from './components/Dialog';

import LocalhostWarning from './components/LocalhostWarning';

if (process.env.NODE_ENV === 'development' && window.self === window.top) {
  // You can remove this if block before deploying your app
  const root = document.getElementById('root');
  render(<LocalhostWarning />, root);
} else {
  init((sdk: BaseExtensionSDK) => {
    const root = document.getElementById('root');

    // All possible locations for your app
    // Feel free to remove unused locations
    // Dont forget to delete the file too :)
    const ComponentLocationSettings = [
      {
        location: locations.LOCATION_APP_CONFIG,
        component: <Config sdk={(sdk as unknown) as AppExtensionSDK} />
      },
      {
        location: locations.LOCATION_ENTRY_FIELD,
        component: <div className="test-field-component"><Field sdk={sdk as FieldExtensionSDK} /></div>
      }
    ];

    // Select a component depending on a location in which the app is rendered.
    ComponentLocationSettings.forEach(componentLocationSetting => {
      if (sdk.location.is(componentLocationSetting.location)) {
        render(componentLocationSetting.component, root);
      }
    });
  });
}
