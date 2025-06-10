import { Routes } from '@angular/router';
import { UserSignComponent } from '../components/user-sign/user-sign.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { AboutComponent } from '../components/about/about.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ExploreComponent } from '../components/explore/explore.component';

export const routes: Routes = [
    {
        title: "Home Page",
        path: "",
        component: HomepageComponent
    },
    {
        title: "Explore",
        path: "explore",
        component: ExploreComponent,
    },
    {
        title: "User - Sign",
        path: "user/sign",
        component: UserSignComponent,
    },
    {
        title: "Profile",
        path: "user/profile",
        component: ProfileComponent
    },
    {
        title: "About Us",
        path: "about",
        component: AboutComponent
    },
];
