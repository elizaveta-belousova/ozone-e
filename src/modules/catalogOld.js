const catalog = () => {
  const catalogButton = document.querySelector('.catalog-button');
  const headerCatalog = document.querySelector('.header__catalog');

  const openCatalog = () => {
    headerCatalog.style.display = headerCatalog.style.display === 'block' ? '' : 'block'
  } 

  catalogButton.addEventListener('click', openCatalog);


}

export default catalog;