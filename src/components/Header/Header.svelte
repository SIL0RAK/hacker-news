<script lang="ts">
    import { Routes } from '../../constants';

    const currentPathname = window.location.pathname;

    interface ILink {
        active: Boolean;
        path: Routes;
        name: string;
    }

    const links: Array<ILink> = [
        { active: false, path: Routes.New, name: 'New' },
        { active: false, path: Routes.Past, name: 'Past' },
        { active: false, path: Routes.Comments, name: 'Comments' },
        { active: false, path: Routes.Ask, name: 'Ask' },
        { active: false, path: Routes.Show, name: 'Show' },
        { active: false, path: Routes.Submit, name: 'Submit' },
    ].map((link) => ({
        ...link,
        active: link.path === currentPathname
    }));
</script>

<header class="topnav">
    <div>Hacker News</div>
    {#each links as link}
        <a class={link.active && 'active'} href={link.path}>{link.name}</a>
    {/each}
</header>

<style>
    .topnav {
      overflow: hidden;
      background-color: #ff8e42;
    }

    .topnav div {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        background-color:#ff8e42;
    }
    
    .topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }
    
    .topnav a:hover {
      background-color:#FFF5EA;
      color: black;
    }
    
    .topnav a.active {
      background-color: #47291A;
      color: white;
    }
</style>