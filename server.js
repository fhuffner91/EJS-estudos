//criando variável de ambiente chamando o express para fazer o servidor
const express=require('express');
//instanciando o express e armazenando na variável app
const app= express();
//Tá explicando para o express que a nossa ferramenta de visualiação do html é o ejs
app.set("view engine", "ejs");
//criando uma rota para a página inicial com o metodo get
app.get("/", function(req, res){
    const items = [
        {title: "D",
         message:"esenvolver aplicações/serviços de forma fácil"
        },
        {title: "E",
        message:"JS usa Javascript para renderizar HTML"
        },
        {title: "M",
        message:"uito fácil de usar"
        },
        {title: "A",
        message:"morzinho"
        },
        {title: "I",
        message:"nstall ejs"
        },
        {title: "S",
        message:"intaxe Simples"
        }
   ];

   const subtitle= "Uma linguagem de modelagem para criação de páginas html utilizando Javascript";
   res.render("pages/index",{
    qualitys: items,
    subtitle: subtitle,
});
});
    
app.get("/sobre", function(req, res){
    res.render("pages/about");
});
//rodando na maquina, porta 8080
app.listen(8080);
console.log("Rodando")