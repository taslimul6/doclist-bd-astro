import {createElement, type ComponentType} from 'react';
import {hydrateRoot} from 'react-dom/client';
import Preferences from './Preferences';
import GeographyFields from './GeographyFields';
import DoctorAvatar from './DoctorAvatar';
import DoctorEngagement from './DoctorEngagement';
import SaveDoctor from './SaveDoctor';
import MyDoctors from './MyDoctors';

const components = {Preferences, GeographyFields, DoctorAvatar, DoctorEngagement, SaveDoctor, MyDoctors};
for (const element of document.querySelectorAll<HTMLElement>('doclist-island')) {
  const name = element.dataset.component as keyof typeof components;
  const Component = components[name] as ComponentType<object>;
  if (Component) hydrateRoot(element, createElement(Component, JSON.parse(element.dataset.props || '{}')));
}
document.querySelector('[data-retry]')?.addEventListener('click',()=>window.location.reload());
