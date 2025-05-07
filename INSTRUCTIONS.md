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