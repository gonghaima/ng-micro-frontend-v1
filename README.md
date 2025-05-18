REF:
https://angular.love/angular-micro-frontends-a-modern-approach-to-complex-app-development

1. Creating our project without any applications. This is done by adding the `-no-create-application` parameter after ng new:

```
ng new native-federation-demo-app --create-application=false
```

Generate Applications
`cd ng-mfe-app`

2. Generate two applications. One will be called `shell` and the other will be called `users`

`ng generate application shell`

`ng generate application users`

3. Installing Schematics, which will create the Native Federation configuration. Schematics is created by Manfred Steyer, well-known in the angular comunity.

`npm i @angular-architects/native-federation`

4. Create / Configure applications

```
ng g @angular-architects/native-federation:init --project users --port 4201 --type remote
```

```
ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
```

5. Update routes for app.routes.ts in Shell

```
export const routes: Routes = [
 {
   path: '',
   component: AppComponent
 },
 {
   path: 'users',
   loadComponent: () =>
     loadRemoteModule('users', './Component').then((m) => m.AppComponent),
 },
];
```

6. Run it
   `ng serve users`
   `ng serve shell`
   Check
   http://localhost:4200/
   http://localhost:4200/users
