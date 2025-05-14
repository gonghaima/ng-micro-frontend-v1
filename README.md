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
