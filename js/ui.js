$( document ).ready(function() {
    // Nav menu 
    const sideMenu = $('.side-menu'); 
    M.Sidenav.init(sideMenu, {edge: 'right'});

    const sideForm = $('.side-form'); 
    M.Sidenav.init(sideForm, {edge: 'left'});

  });
let renderRecipe  = (docData, docID) => {
  
 let recipeCard = `<div class="card-panel recipe white row" data-id=${docID} style="display: none;">
 <img src="img/playstore.png" alt="Food Thumb">
               <div class="recipe-details">
                   <div class="recipe-title"> ${docData.title} </div>
                   <div class="recipe-ingredients">${docData.recipe}</div>
               </div>
               <div class="recipe-delete" data-id=${docID}><i class="material-icons">delete_outline</i></div>
   </div>`
   $(recipeCard).appendTo(".recipes").show('slow');
};


removeRecipe(element.doc.data(), element.doc.id);  {
  $(recipeCard).appendTo(".recipes").show('slow');
}