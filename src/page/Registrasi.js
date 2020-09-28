import React, {Component} from 'react';


class Registrasi extends Component {

	constructor (props){
		super (props)
		this.state = {
			judul : 'Contoh Judul',
			contohPerubahan: 'Judul Yang Akan Di Rubah',
			valueInput: '',
			valueInput2:'',
			valueInput3:'',
			valueInput4:'',
			valueInput5:''
		}
		this.ubahState= this.ubahState.bind(this)
	}

	ubahState(namaValue, e){
		e.preventDefault()

		// perubahan state secara reguler
		// this.setState({[namaValue]:e.target.value})


		// perubahan state secara Asynchronous

		var tampungData = e.target.value
		this.setState(function (state, props){
			return {
				[namaValue]: tampungData

			}
		});


		// console.log(e.target.value)


		// this.setState((state, props) =>{


		// 	judul : 'Ubah Melalui Input'
		// }

		// Perubahan state Secara Regular

		// this.setState({judul: 'Merubah Judul Secara Regular'})

		// perubahan State secara Asynchronous di tulis dengan cara arrow function

		// this.setState((state, props) =>{
		// 	judul: state.contohPerubahan
			
		// }))

// perubahan State secara Asynchronous di tulis dengan cara Regular function

	// 	this.setState(function(state, props) =>{
	// 		return{
	// 		judul: Merubah ke 2
			
	// 	});


	// }



}
	render() {
		return (
			<div>
			<h5> Contoh 1 </h5>
			{


			// <h2>{this.state.judul}</h2>
			// {}

			// <button> type="button" onClick={(e) => this.ubahState (e)}>KLik Untuk Berubah</button>
		}

			<p>{this.state.valueInput}</p>
			 <input value = {this.state.valueInput } onChange= {(e) =>this.ubahState("valueInput", e)} />
			 <h5>==============================================</h5>


			 <h5>Contoh 2 </h5>
			 <p>{this.state.valueInput2}</p>
			 <input value = {this.state.valueInput2} onChange = {(e) =>this.ubahState ("valueInput2",e)} />
			 <h5>================================================</h5>

			 <h5>Contoh 3 </h5>
			 <p>{this.state.valueInput3}</p>
			 <input value = {this.state.valueInput3 } onChange= {(e) =>this.ubahState ("valueInput3", e)} />
			 <h5>================================================</h5>


			 <h5>Contoh 4 </h5>
			 <p>{this.state.valueInput4}</p>
			 <input value = {this.state.valueInput4 } onChange= {(e) =>this.ubahState ("valueInput4", e)} />
			 <h5>================================================</h5>


			 <h5>Contoh 5 </h5>
			 <p>{this.state.valueInput5}</p>
			 <input value = {this.state.valueInput5 } onChange= {(e) =>this.ubahState ("valueInput5", e)} />
			 <h5>================================================</h5>
			
			
			
			

			</div>

		);

	}
	
}



export default Registrasi;