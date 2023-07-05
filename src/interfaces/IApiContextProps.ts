export interface ApiContextProps {
  authenticated: (apiKey: string) => Promise<void>;
  userIsAuthenticated:boolean;
  token:string
}