class Product{
    constructor(names, tel, email, age, genero){
        this.names = names
        this.tel = tel
        this.email = email
        this.age = age
        this.genero = genero
    }
}

class interfaz{
    addtable(product){
       const ordentable = document.getElementById('table-imp')
       const element = document.createElement('div')
       element.innerHTML = `
       <div class="card text-center">
        <table class="table table-striped">
            <tbody>
                <tr>
                    <td>${product.names}</td>
                    <td>${product.tel}</td>
                    <td>${product.email}</td>
                    <td>${product.age}</td>
                    <td>${product.genero}</td>
                    <td><a href="#" class="btn btn-danger" name="delete">X</a></td>
                </tr>
            </tbody>
        </table>
       </div>
       `
       ordentable.appendChild(element);
       this.resetform();
    }

    resetform(){
        document.getElementById('form-accept').reset();
    }

    deletedata(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.parentElement.
                parentElement.remove()
        }
    }
}

document.getElementById('form-accept').addEventListener('submit',
    function(e){
        const names = document.getElementById('names').value;
        const tel = document.getElementById('tel').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const genero = document.getElementById('genero').value;

        const product = new Product(names, tel, email, age, genero);

        const addinterface = new interfaz();
        addinterface.addtable(product);

        e.preventDefault();
});

document.getElementById('table-imp').addEventListener('click', 
    function(e){
    const addinterface = new interfaz();
    addinterface.deletedata(e.target);  
});