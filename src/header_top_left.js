<style>
    .logo-container {
        height: 72px;
    }
    .block-user-info a,
    .block-user-info a:hover {
        color: #313a4a;
        font-size: 15px;
        font-size: 14px;
        font-family: Inter;
        font-weight: 400;
    }
    .userphoto,
    .user-photo {
        cursor: pointer;
    }

    .logo-container > div {
        display: flex;
        height: 100%;
    }
    .logo-container > div > a > .logo_container__text {
        opacity: .7;
        padding-right: 14px;
    }
    .logo-container > div > a > .logo_container__logo {
        margin-right: 4px;
    }
    .logo-container > div > .logo_container__link {
        font-weight: 500;
        font-size: 24px;
        color: #191c34;
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 1176px) {
        .page-content{
            width: auto;
        }
    }

    @media screen and (max-width: 768px) {
        .logo-container img {
            width: auto;
            height: auto;
        }
        .logo_container__name,
        .logo_container__logo {
            display: none;
        }
    }

    @media screen and (max-width: 430px) {
        .logo_container__text,
        .logo_container__name {
            display: none;
        }
        .logo_container__logo {
            display: inline;
        }
        .logo-container {
            margin: auto;
            margin-left: 13px;
            position: inherit;
            left: auto;
        }
    }
</style>


<div id="wt-header-logo" class="logo-container">
    <div>
        <a href="/home" class="logo_container__link">
            <span class="logo_container__text">корпоративный портал</span>
            <img  class="logo_container__logo"
                src="design/default/images/logo1.png"
            />
            <span class="logo_container__name">WebsoftHCM</span>
        </a>
    </div>
</div>
