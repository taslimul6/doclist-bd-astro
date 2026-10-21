import {createContext, useContext, type ComponentType} from 'react';

export const PagePath = createContext('/');

// Only interactive leaf components are hydrated. Medical data and page rendering stay on the server.
export function island<P extends object>(name: string, Component: ComponentType<P>) {
  return function Island(props: P) {
    const pathname = useContext(PagePath);
    const input = name === 'Preferences' ? {...props, pathname} : props;
    return <doclist-island style={{display:'contents'}} data-component={name} data-props={JSON.stringify(input)}>
      <Component {...input}/>
    </doclist-island>;
  };
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'doclist-island': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>,HTMLElement>;
    }
  }
}
