import Home, {generateMetadata as generateHomeMetadata} from '../[lang]/page';

const banglaParams = () => Promise.resolve({lang: 'bn'});

export function generateMetadata() {
  return generateHomeMetadata({params: banglaParams()});
}

export default function Page() {
  return <Home params={banglaParams()} />;
}
