import React, { Component } from 'react';

class Pendejado3 extends Component {

    state = {
        nombre: 'Mr Dog El Perro',
        url: "https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
    }

    render() { 
        return 
        <div class="container"></div>

<div class="row">
<div class="col s6">

<form class="col s12">
<div class="row">
<div class="input-field col s6">
  <input placeholder="Placeholder" id="first_name" type="text" class="validate">
  <label for="first_name">First Name</label>
</div>
<div class="input-field col s6">
  <input id="last_name" type="text" class="validate">
  <label for="last_name">Last Name</label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
  <input disabled value="I am not editable" id="disabled" type="text" class="validate">
  <label for="disabled">Disabled</label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
  <input id="password" type="password" class="validate">
  <label for="password">Password</label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
  <input id="email" type="email" class="validate">
  <label for="email">Email</label>
</div>
</div>
<div class="row">
<div class="col s12">
  This is an inline input field:
  <div class="input-field inline">
    <input id="email_inline" type="email" class="validate">
    <label for="email_inline">Email</label>
    <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
  </div>
</div>
</div>
</form>
</div>
<div class="col s6">
<a data-target="modal1" class="waves-effect waves-light btn modal-trigger"><i class="material-icons right">cloud</i>Demen Servicio</a>
</div>
</div>

        

        
        
        
        
        
        
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={this.state.url} />
            <div className="card-body">
              <p className="card-text">
                {this.state.nombre}
              </p>
            </div>
          </div>;
    }
}
 
export default Tarjeta;