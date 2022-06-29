var dataRef = new Firebase('https://site-padaria-default-rtdb.firebaseio.com/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'cards') {

            var _itemsKey = Object.entries(valor);
    
            count++;
    
    
            for (const [key2, value2] of _itemsKey) {
    
                var newId = 'cards'+count;
				var clone = document.querySelector('#cards').cloneNode( true );
				clone.setAttribute('id', newId);
							
				//var img_url = clone.getElementsByClassName("img_url")[0];
				//img_url.setAttribute("src", value2.img_url);

				var titulo = clone.getElementsByClassName("titulo")[0];
				titulo.textContent = value2.titulo;

				var texto = clone.getElementsByClassName("texto")[0];
				texto.textContent = value2.texto;

                document.querySelector('#cards-clone').appendChild( clone );
    
            }
        }


    }

});
