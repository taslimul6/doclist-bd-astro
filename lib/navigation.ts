export class RouteResponse extends Error {
  constructor(public status: number, public location?: string) {
    super(status === 404 ? 'Not found' : 'Redirect');
  }
}
export function notFound(): never { throw new RouteResponse(404); }
export function permanentRedirect(location: string): never { throw new RouteResponse(308, location); }
