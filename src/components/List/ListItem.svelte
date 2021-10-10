<script>
    export let item;
</script>

<li class="list-item">
    <div class="score">
        <div>👍</div>
        {item.score}
    </div>
    <div class="content">
        <div class="info">
            posted by {item.by}
            <div class="actions">
                <div>❌ hide</div>
                <div>💭 comment</div>
            </div>
        </div>
        <a class="title" href={item.url}>
            {item.title}
        </a>
    </div>
</li>

<style>
    .list-item {
        display: flex;
        padding: 5px 0 5px 0;
    }
    
    .info {
        color: #828282;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        display: flex;
        padding-bottom: 2px;
    }

    .actions {
        display: flex;
    }

    .actions div {
        padding-left: 5px;
        cursor: pointer;
    }

    .score {
        display: flex;
        flex-direction: column;
        padding: 0 5px 0 5px;
        justify-content: center;
        color: #828282;
        min-width: 30px;
    }

    .title {
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        text-decoration: none;
        color: #000000;
    }
</style>