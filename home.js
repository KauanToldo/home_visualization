looker.plugins.visualizations.add({
    id: "home",
    label: "Home",
    options: {
      
    },
    create: function(element, config) {
      this._tableContainer = element.appendChild(document.createElement("div"));
      this._tableContainer.innerHTML = `
        <style>
            #vis {
                overflow: hidden;
            }
        </style>

        <div style="overflow-y: hidden;position: relative;z-index: 5; width: 100%; height: 100vh; margin: 0; padding: 0; overflow: hidden; box-sizing: border-box; font-family: 'Montserrat', sans-serif;;
        background-image: url(https://storage.googleapis.com/looker_styles_servopa/imagens/fundo_servopa.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;">
            <div style="height: 8vh; width: 100%; padding: 25px 45px; display: flex; align-items: center;">
            <img id="logo" src="https://gruposervopa.com.br/themes/theme-grupo-servopa/assets/img/logos/servopa-grupo-branco.svg" alt="Logo" style="width: 150px;">
            </div>

            <div style="margin-top: 10vh;display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center;">
                <span style="color: white; margin: 0; font-weight: normal;">Olá, seja bem vindo(a) ao</span>
                <h1 style="margin-top: 10px;margin-bottom: 30px; color: white;">Painel do Conselho</h1>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                
                <div style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://storage.googleapis.com/looker_styles_servopa/imagens/c01-miniatura.jpg" alt="Imagem 1" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <a href="https://servopa.cloud.looker.com/embed/dashboards/80?Bandeira=&Trimestre=&Ano=2025&Periodo=empresa&M%C3%AAs=&Chave%20Empresa=" style="display: flex; align-items: center;font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">DRE - Conselho</a>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -4px;">
                    </div>
                </div>

                <div style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://storage.googleapis.com/looker_styles_servopa/imagens/g01_1-miniatura.jpg" alt="Imagem 2" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <a href="https://servopa.cloud.looker.com/embed/dashboards/92?Bandeira+Bi=&Conta=&Ano=2025&M%C3%AAs=&Chv+Empresa=" style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">DRE - Gerencial</a>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                    </div>
                </div>

                <div style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://storage.googleapis.com/looker_styles_servopa/imagens/g02_1-miniatura.jpg" alt="Imagem 3" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <a href="https://servopa.cloud.looker.com/embed/dashboards/93?Bandeira=&Conta=&Data=1+month" style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">DRE - Objetivo x Realizado</a>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                    </div>
                </div>

                </div>
            </div>
            </div>

        </div>`;
    },
    // Render in response to the data or settings changing
    updateAsync: function(data, element, config, queryResponse, details, done) {
        this.clearErrors();
        this._tableContainer.innerHTML = `
        <style>
            #vis {
                overflow: hidden;
            }
        </style>

        <div style="overflow-y: hidden;position: relative;z-index: 5; width: 100%; height: 100vh; margin: 0; padding: 0; overflow: hidden; box-sizing: border-box; font-family: 'Montserrat', sans-serif;;
        background-image: url(https://storage.googleapis.com/looker_styles_servopa/imagens/fundo_servopa.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;">
            <div style="height: 8vh; width: 100%; padding: 25px 45px; display: flex; align-items: center;">
            <img id="logo" src="https://gruposervopa.com.br/themes/theme-grupo-servopa/assets/img/logos/servopa-grupo-branco.svg" alt="Logo" style="width: 150px;">
            </div>

            <div style="margin-top: 10vh;display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center;">
                <span style="color: white; margin: 0; font-weight: normal;">Olá, seja bem vindo(a) ao</span>
                <h1 style="margin-top: 10px;margin-bottom: 30px; color: white;">Painel do Conselho</h1>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                
                <div style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://storage.googleapis.com/looker_styles_servopa/imagens/c01-miniatura.jpg" alt="Imagem 1" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <a target="_blank" href="https://servopa.cloud.looker.com/embed/dashboards/80?Bandeira=&Trimestre=&Ano=2025&Periodo=empresa&M%C3%AAs=&Chave%20Empresa=" style="display: flex; align-items: center;font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">DRE - Conselho</a>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -4px;">
                    </div>
                </div>

                <div style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://storage.googleapis.com/looker_styles_servopa/imagens/g01_1-miniatura.jpg" alt="Imagem 2" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <a target="_blank" href="https://servopa.cloud.looker.com/embed/dashboards/92?Bandeira+Bi=&Conta=&Ano=2025&M%C3%AAs=&Chv+Empresa=" style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">DRE - Gerencial</a>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                    </div>
                </div>

                <div style="background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); border-radius: 12px; width: 350px; overflow: hidden;">
                    <img src="https://storage.googleapis.com/looker_styles_servopa/imagens/g02_1-miniatura.jpg" alt="Imagem 3" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <a target="_blank" href="https://servopa.cloud.looker.com/embed/dashboards/93?Bandeira=&Conta=&Data=1+month" style="display: flex; align-items: center; font-size: 20px; margin-bottom: 8px; font-weight: bold; color: #333; text-decoration: none; display: block; cursor: pointer;">DRE - Objetivo x Realizado</a>
                    <img src="https://cdn-icons-png.flaticon.com/512/5422/5422411.png" alt="Redirecionar" width="25" height="25" style="margin-top: -6px;">
                    </div>
                </div>

                </div>
            </div>
            </div>

        </div>`;
        done();

}});