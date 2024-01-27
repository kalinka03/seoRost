<?php include("template/header.php") ?>


<div class="error-page">
    <div class="container">
        <div class="error-page__info">
            <p class="sub-title">Запрашиваемая страница не найдена</p>
            <p>Возможно был введен некорректный адрес или страница была удалена</p>
        </div>
        <h1>404</h1>
        <div class="error-page__come-back">
            <a href="#" class="error-page__button">
                Перейти на главную страницу
            </a>
            <div class="error-page__text">
                <p>Для возврата на предыдущую страницу нажмите кнопку &quot;Назад&quot; в своем браузере</p>
            </div>
        </div>
    </div>
</div>


<?php include("template/popUps.php") ?>
<?php include("template/footer.php") ?>
<link rel="stylesheet" type="text/css" href="/assets/css/pages/404.css">
<script type="text/javascript" src="/js/404.js"></script>
</body>
</html>