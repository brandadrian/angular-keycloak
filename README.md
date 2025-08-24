# Angular Keycloak
Simple [ExpressJs](https://expressjs.com) backend and [Angular](https://angular.dev) frontend with [Keycloak](https://www.keycloak.org) integration. Used for personal education and tests.

**Features**
- Login and logout
- Load todos from protected routes
- Display user information loaded from keycloak  

# Getting started
To start the app you'll have to start keycloak in docker and start the angular app as follows.

## Keycloak Setup Instructions

To set up Keycloak for local development with this Angular app, follow these steps:

### 1. Start Keycloak with Docker Compose

Run the following command in the project root:

```powershell
docker compose up -d
```

This will start a Keycloak server with default credentials:
- Username: `admin`
- Password: `admin`
- Keycloak URL: `http://localhost:8080`

### 2. Create a Client
1. In your realm, go to **Clients**
2. Click **Create client**
3. Enter a client ID (e.g., `angular-app`)
4. Set **Client type** to `OpenID Connect`
5. Set **Root URL** to `http://localhost:4200`
6. Save the client

### 3. Configure Client Settings
- In the client settings, set **Valid Redirect URIs** to `http://localhost:4200/*`
- Set **Web Origins** to `+`

### 4. Create a User
1. Go to **Users**
2. Click **Add user** and fill in the details
3. After creating, go to **Credentials** and set a password

### 5. Create a Role
1. Go to **Roles**
2. Click **Add role**

### 6. Assign Role to User
1. Go to the user details
2. Assign the role to the user

### 7. Silent SSO Asset
The file `frontend/src/assets/silent-check-sso.html` is used for silent SSO checks. Ensure your Keycloak client settings allow silent authentication if you use this feature. This prevents logging out when refreshing the page.

---

For more details, see the official Keycloak documentation: https://www.keycloak.org/documentation


## Start Angular App

Run the following commands in the `frontend` directory:

```powershell
npm install
ng serve
```

The app will be available at:
```
http://localhost:4200
```

## Start Backend App

Run the following commands in the `backend` directory:

```powershell
npm install
npm start
```

The backend will be available at:
```
http://localhost:9090
```