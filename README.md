# ng-micro-frontend-v1

- Create a new work space

```
ng new ng-mfe-app --create-application=false
```

- Generate Applications
  - cd ng-mfe-app

```
ng generate application shell --prefix app-shell
ng generate application todo --prefix app-todo
```

- Native Federation Setup

```
npm i -D @angular-architects/native-federation
```

- Configure Host (Shell) Application
  at root level

```
npm install --save-dev @angular-architects/native-federation
```

```
ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
```

```
ng g @angular-architects/native-federation:init --project todo --port 4201 --type remote
```

- Add Routes in Shell

```
ng g c pages/home --project shell
```
update routes - ng-mfe-app/projects/shell/src/app/app.routes.ts
```ts
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todo',
    loadComponent: () =>
      loadRemoteModule('todo', './Component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
```
