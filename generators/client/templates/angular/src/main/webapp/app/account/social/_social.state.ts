import { Ng2StateDeclaration } from "ui-router-ng2";
<%_ if (enableTranslation) { _%>
import { JhiLanguageService } from 'ng-jhipster';
<%_ } _%>
import { SocialRegisterComponent } from './social-register.component';
<%_ if (authenticationType == 'jwt') { _%>
import { SocialAuthComponent } from './social-auth.component';
<%_ } _%>

export const socialRegisterState: Ng2StateDeclaration = {
    name: 'social-register',
    parent: 'account',
    url: '/social-register/:provider?{success:boolean}',
    data: {
        authorities: [],
        pageTitle: 'social.register.title'
    },
    views: {
        'content@': {
            component: SocialRegisterComponent
        }
    },
    resolve: [{
        token: 'translate',
        deps: [JhiLanguageService],
        resolveFn: (languageService: JhiLanguageService) => languageService.setLocations(['social'])
    }]
};
<%_ if (authenticationType == 'jwt') { _%>
export const socialAuthState: Ng2StateDeclaration = {
    name: 'social-auth',
    parent: 'account',
    url: '/social-auth',
    data: {
        authorities: []
    },
    views: {
        'content@': {
            component: SocialAuthComponent
        }
    }
};
<%_ } _%>
