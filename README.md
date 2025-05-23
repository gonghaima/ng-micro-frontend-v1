https://loiane.com/2025/01/angular-micro-frontends-with-native-federation/

1. Creating the Angular workspace

```
ng new angular-mfe-native-federation --create-application=false
```

2. Creating the Angular applications/projects

```
ng generate application shell --prefix app-shell
```

```
ng generate application products --prefix app-products
```

3. Adding Native Federation to the project

```
npm i @angular-architects/native-federation
```

4. Configuring the Shell (host) application

ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
ng g @angular-architects/native-federation:init --project products --port 4201 --type remote
