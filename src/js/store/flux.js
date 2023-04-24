// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},
// 			loadSomeData: () => {
// 				/**
// 					fetch().then().then(data => setStore({ "foo": data.bar }))
// 				*/
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

// export default getState;
let log = console.log


const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			apiUsersList: [
				{
					"Users": []
				}
			],
			appUsersList: [
				{
					"Users": []
				}
			],
			list: [
				{
					"Task Info": "0--",
					"ID Info": 12345,
					"Created": "Jan. 23, 2023",
					"Status": { "Status": "Pending", "Color": "danger" },
					"Memo": "",

				},
				// {
				// 	"Task Info": "1--",
				// 	"ID Info": 63283,
				// 	"Created": "Jan. 23, 2023",
				// 	"Status": { "Status": "Completed", "Color": "success" },
				// 	"Memo":"hello",

				// },
				// {
				// 	"Task Info": "2--",
				// 	"ID Info": 19242,
				// 	"Created": "Jan. 23, 2023",
				// 	"Status": { "Status": "Pending", "Color": "danger" },
				// 	"Memo":"",

				// },
				// {
				// 	"Task Info": "3--",
				// 	"ID Info": 17492,
				// 	"Created": "Jan. 23, 2023",
				// 	"Status": { "Status": "Completed", "Color": "success" },
				// 	"Memo":"",

				// },
				// {
				// 	"Task Info": "4--",
				// 	"ID Info": 13793,
				// 	"Created": "Jan. 23, 2023",
				// 	"Status": { "Status": "Fixed", "Color": "info" },
				// 	"Memo":"",

				// },
				// {
				// 	"Task Info": "5--",
				// 	"ID Info": 91484,
				// 	"Created": "Jan. 23, 2023",
				// 	"Status": { "Status": "In progress", "Color": "warning" },
				// 	"Memo":"",

				// },
			],
			statusArr: [
				{ "Status": "Pending", "Color": "danger" },
				{ "Status": "In progress", "Color": "warning" },
				{ "Status": "Fixed", "Color": "info" },
				{ "Status": "50% Complete", "Color": "primary" },
				{ "Status": "Completed", "Color": "success" }
			],
			userNameHolder: [
				{
					"User Info": "",
					"Name Taken": false
				}
			],
			holder: "",
			switch: false,
			details: [],
			memoHolder: "",

		},
		actions: {

			sendButton: (e) => {
				const store = getStore();
				const Info = getActions().ranInfo();
				const inputValue = store.userNameHolder[0];
				const memo = store.memoHolder;
				let input1 = document.querySelector('#userName')
				log(inputValue)

				if (inputValue === "") {
					//Use toaster
					getActions().showToast("The Username is empty...Please enter a name!")

					//   alert("The input cannot be empty");
				} else if(inputValue["Name Taken"] === true){
					getActions().showToast("The Username already Taken...Please choose another name!")

				}else {
					const newObject = {
						"Task Info": inputValue,
						"ID Info": Info.ID,
						"Created": Info.Date,
						"Status": Info.Status,
						"Memo": memo
					};
					//   console.log(newObject);
					console.log(store);

					const newList = [...store.list, newObject];
					setStore({ list: newList });
					setStore({ userNameHolder: "" }); // reset the input value after adding a new task
					setStore({ memoHolder: "" });
					setStore({ appUsersList: newList });
					//   console.log(e.target.parentNode.querySelector('#input1'))
					input1.value = ""
				}
			},

			// Use getActions to call a function within a fuction
			trashIcon: (i) => {
				const store = getStore();
				const newList = store.list.filter((item) => { return item != store.list[i] })
				setStore({ list: newList })
			},

			setUserNameHolder: (e) => {
				// console.log(e.target.value)
				const store = getStore();
				if (e.target.value) {
					// setStore({ userNameHolder: e.target.value });
					setStore({ userNameHolder: [{ ...store.userNameHolder[0], "User Info": e.target.value }] });

				} else {
					setStore({ userNameHolder: [{ "User Info": "", "Name Taken": false }] });
				}
			},

			// setUserNameHolder: (e) => {
			// 	if (e.target.value) {
			// 	  setStore({
			// 		userNameHolder: [
			// 		  {
			// 			...getStore().userNameHolder[0],
			// 			"User Info": e.target.value
			// 		  }
			// 		]
			// 	  });
			// 	} else {
			// 	  setStore({ userNameHolder: [{ "User Info": "", "Name Taken": false }] });
			// 	}
			//   },


			setHolder: (e) => {
				if (e.target.value) {
					setStore({ holder: e.target.value });
				}
			},

			keyPress: (e) => {
				const store = getStore();
				const Info = getActions().ranInfo();
				const inputValue = store.userNameHolder[0];
				const memo = store.memoHolder;
				let input1 = document.querySelector('#userName')
				log(inputValue)

				if (inputValue === "") {
					getActions().showToast("The Username is empty...Please enter a name!")

					//   alert("The input cannot be empty");
				} else if(inputValue["Name Taken"] === true){
					getActions().showToast("The Username already Taken...Please choose another name!")

				} else if (e.key === "Enter") {
					const newObject = {
						"Task Info": inputValue,
						"ID Info": Info.ID,
						"Created": Info.Date,
						"Status": Info.Status,
						"Memo": memo
					};
					console.log(newObject);
					console.log(store);

					const newList = [...store.list, newObject];
					setStore({ list: newList });
					setStore({ userNameHolder: "" }); // reset the input value after adding a new task
					setStore({ memoHolder: "" });
					input1.value = ""
				}
			},

			ranInfo: () => {
				const store = getStore();
				let statusArr = [
					{ "Status": "Pending", "Color": "danger" },
					{ "Status": "In progress", "Color": "warning" },
					{ "Status": "Fixed", "Color": "info" },
					{ "Status": "50% Complete", "Color": "primary" },
					{ "Status": "Completed", "Color": "success" }
				];
				let statIndex = Math.floor(Math.random() * statusArr.length);
				let month = [
					"Jan.",
					"Feb.",
					"Mar.",
					"Apr.",
					"May",
					"June",
					"July",
					"Aug.",
					"Sep.",
					"Oct.",
					"Nov.",
					"Dec."
				];
				let day = Math.floor(Math.random() * 27) + 1;
				let year = "20" + (Math.floor(Math.random() * 1) + 23);
				const newRanInfo = {
					"ID": Math.floor(Math.random() * Math.pow(10, 6)),
					"Status": statusArr[statIndex],
					"Date": `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`,
					"Memo": ""
				};
				//Added not to spam the API
				if (store.memoHolder === "") {
					setStore({ memoHolder: "Waiting" });
					// getActions().fetchData();
				}
				setTimeout(2000)
				// console.log("memo",getStore().memoHolder)
				return newRanInfo;
			},

			showToast: (msg) => {
				const myToast = document.getElementById('myToast');
				const toast = new bootstrap.Toast(myToast);
				const toastBody = myToast.querySelector('.toast-body');
				toastBody.textContent = msg;
				toast.show();
			},

			// showToast:()=>{
			// 	//Need to change to custom text
			// 	const myToast = document.getElementById('myToast');
			// 	const toast = new bootstrap.Toast(myToast);
			// 	log(myToast)
			// 	// toast.show();
			// },

			// ranInfo: async () => {
			// 	let statusArr = [
			// 	  { "Status": "Pending", "Color": "danger" },
			// 	  { "Status": "In progress", "Color": "warning" },
			// 	  { "Status": "Fixed", "Color": "info" },
			// 	  { "Status": "50% Complete", "Color": "primary" },
			// 	  { "Status": "Completed", "Color": "success" }
			// 	];
			// 	let statIndex = Math.floor(Math.random() * statusArr.length);
			// 	let month = [
			// 	  "Jan.",
			// 	  "Feb.",
			// 	  "Mar.",
			// 	  "Apr.",
			// 	  "May",
			// 	  "June",
			// 	  "July",
			// 	  "Aug.",
			// 	  "Sep.",
			// 	  "Oct.",
			// 	  "Nov.",
			// 	  "Dec."
			// 	];
			// 	let day = Math.floor(Math.random() * 27) + 1;
			// 	let year = "20" + (Math.floor(Math.random() * 1) + 23);
			// 	const memo = await getActions().fetchData();
			// 	console.log(memo)
			// 	const newRanInfo = {
			// 	  "ID": Math.floor(Math.random() * Math.pow(10, 6)),
			// 	  "Status": statusArr[statIndex],
			// 	  "Date": `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`,
			// 	  "Memo": memo
			// 	};
			// 	// console.log(newRanInfo)
			// 	return Promise.resolve(newRanInfo);
			//   },


			// fetchData: () => {
			// 	console.log("called")
			// 	let ranInt = Math.floor(Math.random() * 21) + 95;
			// 	const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://asdfast.beobit.net/api/?type=word&length='+ ranInt +'&startLorem=true');
			// 	return fetch(url)
			// 	  .then(response => response.json())
			// 	  .then(data => {
			// 		return data.contents;
			// 	  })
			// 	  .then(contents => {
			// 		const parsedJson = JSON.parse(contents);
			// 		// return parsedJson.text
			// 	// 	console.log(parsedJson.text)
			// 	  setStore({memoHolder: parsedJson.text })
			// 	  })
			// 	  .catch(error => {
			// 		console.error(error);
			// 	  });
			//   },
			/*=========================== FetchAPI Section Start =========================*/

			// fetchApiUsers:()=>{
			// 	const store = getStore();
			// 	log(store)
			// 	const url ='https://assets.breatheco.de/apis/fake/todos/user'
			// 	return new Promise((resolve, reject)=>{
			// 		fetch(url)
			// 		.then(response => response.json())
			// 		.then(data =>{
			// 			console.log("USERS")
			// 			data.forEach((item,index)=>{
			// 				// console.log(item)
			// 			})
			// 			setStore({ apiUsersList: {"Users":data} });
			// 		})
			// 	log(store)

			// 	})
			// },

			test:()=>{
				//Get
				const store = getStore();
				// log(store.apiUsersList)
				let username = '';
				// let urlBase ='https://assets.breatheco.de/apis/fake/todos/user/'
				// fetch('https://assets.breatheco.de/apis/fake/todos/user/a')
				// 	.then(response => response.json())
				// 	.then(data => log(data[0]) )

				store.apiUsersList["Users"].forEach((name,index)=>{
					setTimeout(() => {
					// log('https://assets.breatheco.de/apis/fake/todos/user/'+name)
					fetch('https://assets.breatheco.de/apis/fake/todos/user/'+name)
					.then(response => response.json())
					.then(data => log(data[0]) )
					},500);
				})
				
				// return new Promise((resolve, reject)=>{
				// 	fetch(url)
				// 	.then(response => response.json())
				// 	.then(data =>{
				// 		console.log("USERS")
				// 		data.forEach((item,index)=>{
				// 			// console.log(item)
				// 		})
				// 		setStore({ apiUsersList: {"Users":data} });
				// 	})
				// log(store)

				// })
			},


			checkUserName: () => {
				const store = getStore();
				const inputValue = store.userNameHolder[0]["User Info"];
				log("Out->",inputValue, store.userNameHolder[0])
				for (let i = 0; i < store.apiUsersList["Users"].length; i++) {
					const item = store.apiUsersList["Users"][i];
					if (inputValue === item && inputValue !== "") {
						setStore({ userNameHolder: [{ ...store.userNameHolder[0], "Name Taken": true }] });
						getActions().showToast("Username is already taken.");
						log("T->",inputValue, store.userNameHolder[0]);
						return; // exit the loop when the name is found
					} else {	
					setStore({ userNameHolder: [{ ...store.userNameHolder[0], "Name Taken": false }] });
					}
				}
				log("F->",inputValue, store.userNameHolder[0]);
				
				
			},


			fetchApiUsersSend: () => {
				//POST
				const store = getStore();


				let tasks;
				fetch("https://assets.breatheco.de/apis/fake/todos/user/vasily", {
					method: "POST",
					body: JSON.stringify(),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((response) => response.json())
					.then((data) => tasks = data);
				setStore({ tasks: tasks });
			},

			fetchApiUsers: () => {
				//get all user in database
				const store = getStore();
				log(store.apiUsersList)
				const url = 'https://assets.breatheco.de/apis/fake/todos/user';
				return new Promise((resolve, reject) => {
					fetch(url)
						.then(response => response.json())
						.then(data => {
							console.log("USERS");
							data.forEach((item, index) => {
								// console.log(item)
							});
							setStore({ apiUsersList: { "Users": data } });
							log(store.apiUsersList["Users"]); // moved inside the second then block
							//   store.apiUsersList["Users"].forEach(i=>log(i)); // moved inside the second then block
						})
						.catch(error => {
							console.error(error);
							reject(error);
						});
				});
			},


			fetchData: () => {
				let ranInt = Math.floor(Math.random() * 21) + 95;
				const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://asdfast.beobit.net/api/?type=word&length=' + ranInt + '&startLorem=true');
				return new Promise((resolve, reject) => {
					// Time control nod to spam the api
					setTimeout(() => {
						fetch(url)
							.then(response => response.json())
							.then(data => {
								const parsedJson = JSON.parse(data.contents);
								console.log("JSON", parsedJson.text)
								setStore({ memoHolder: parsedJson.text });
								resolve(parsedJson.text);
							})
							.catch(error => {
								console.error(error);
								reject(error);
							});
					}, 100); // 1 second delay
				});
			},


			loadSomeData3: () => {
				const store = getStore();

				let tasks;
				fetch("https://assets.breatheco.de/apis/fake/todos/user/vasily", {
					method: "POST",
					body: JSON.stringify(),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((response) => response.json())
					.then((data) => tasks = data);
				setStore({ tasks: tasks });

			},


			// fetchData: () => {
			// console.log("called")
			// 	let ranInt = Math.floor(Math.random() * 21) + 95;
			// 	const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://asdfast.beobit.net/api/?type=word&length='+ ranInt +'&startLorem=true');
			// 	return new Promise((resolve, reject) => {
			// 	  setTimeout(() => {
			// 		fetch(url)
			// 		  .then(response => response.json())
			// 		  .then(data => {
			// 			const parsedJson = JSON.parse(data.contents);
			// 			resolve(parsedJson.text);
			// 		  })
			// 		  .catch(error => {
			// 			console.error(error);
			// 			reject(error);
			// 		  });
			// 	  }, 2000); // delay in milliseconds (e.g., 1000 = 1 second)
			// 	});
			//   },

			/*=========================== FetchAPI Section End =========================*/

			/*=========================== Fix Section =========================*/
			ranClick: (e) => {
				const store = getStore();
				const switchValue = store.switch;
				const switchElement1 = document.querySelector("#switch");
				const switchElement2 = document.querySelector("#statusIcon");
				const status = document.querySelectorAll(".badge")

				if (e.target.id !== "switchIcon" && e.target !== switchElement1 && e.target !== switchElement2) {

					status.forEach((i) => {
						i.removeAttribute("data-bs-toggle", "modal");
						i.removeAttribute("data-bs-target", "#Modal");
						i.removeAttribute("data-bs-whatever", "@getbootstrap");
					})
					setStore({ switch: false });
				} else if (switchValue === false) {
					// console.log("its false")
				}
			},

			switchStatusButton: (e) => {
				//need code..
				const store = getStore();
				const switchValue = store.switch;
				let statusButton = false,
					status = document.querySelectorAll(".badge")

				if (e.target.parentNode.parentNode.querySelector("#switch").id === "switch") {
					status.forEach((i) => {
						i.setAttribute("data-bs-toggle", "modal");
						i.setAttribute("data-bs-target", "#Modal");
						i.setAttribute("data-bs-whatever", "@getbootstrap");
					})

					statusButton = true
					setStore({ switch: statusButton })
				}
			},


			// statusIcon:(e)=>{
			// 	const store = getStore();
			// 	const switchValue = store.switch;

			// // 	e.target.innerHTML += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			// // 	<div class="modal-dialog modal-dialog-centered">
			// // 	  <div class="modal-content">
			// // 		<div class="modal-header">
			// // 		  <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new post</h1>
			// // 		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			// // 		</div>
			// // 		<div class="modal-body">
			// // 		</div>
			// // 	  </div>
			// // 	</div>
			// //   </div>`
			// 	const className = e.target.attributes

			// 	console.log(className)


			// 	if(switchValue === true){
			// 		// document.querySelector("#statusIcon").parent.innerHTML +=`<div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			// 		// 	     <div className="modal-dialog modal-dialog-centered">
			// 		// 	 	<div className="modal-content">
			// 		// 	 	  <div className="modal-header">
			// 		// 	 		<h1 className="modal-title fs-5" id="exampleModalLabel">Create a new post</h1>
			// 		// 	 		<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			// 		// 	 	  </div>
			// 		// 	 	  <div className="modal-body">
			// 		// 	 	  </div>
			// 		// 	 	</div>
			// 		// 	   </div>
			// 		// 	 </div>`
			// 		console.log(document.querySelector("#statusIcon").parentNode)
			// 		console.log(e.target)
			// 		// setStore({ switch: false })

			// 	}
			// },

			displayTrash: (e) => {

				let up = document.querySelectorAll('#bUp'),
					down = document.querySelectorAll('#bDown'),
					trash = document.querySelectorAll('#bTrash')
				up.forEach((i) => {
					i.style.display = "none"
				})
				down.forEach((i) => {
					i.style.display = "none"
				})
				trash.forEach((i) => {
					i.style.display = ""
				})
			},

			displayArrow: (e) => {
				let up = document.querySelectorAll('#bUp'),
					down = document.querySelectorAll('#bDown'),
					trash = document.querySelectorAll('#bTrash')
				up.forEach((i) => {
					i.style.display = ""
				})
				down.forEach((i) => {
					i.style.display = ""
				})
				trash.forEach((i) => {
					i.style.display = "none"
				})
			},
			moveItemUp: (i) => {
				const store = getStore();
				const lastIndex = store.list.length - 1;
				const newList = store.list.map((item, index, arr) => {
					if (index === i - 1) {
						return arr[i];
					} else if (index === i) {
						if (index === 0) {
							return arr[lastIndex];
						} else {
							return arr[i - 1];
						}
					} else if (index === lastIndex && i === 0) {
						return arr[i];
					} else {
						return item;
					}
				});
				setStore({ list: newList });
			},

			moveItemDown: (i) => {
				const store = getStore();
				const firstIndex = 0;
				const lastIndex = store.list.length - 1;
				const newList = store.list.map((item, index, arr) => {
					if (index === i + 1) {
						return arr[i];
					} else if (index === i) {
						if (index === lastIndex) {
							return arr[firstIndex];
						} else {
							return arr[i + 1];
						}
					} else if (index === firstIndex && i === lastIndex) {
						return arr[i];
					} else {
						return item;
					}
				});
				setStore({ list: newList });
			},


			gotoPage: (i) => {
				const store = getStore();
				let addDetails;
				console.log(store.details)
				store.list.map((item, index) => {

					if (item["ID Info"] === i) {
						console.log("I got it", item, i)
						addDetails = item
						return addDetails
					}
				})
				setStore({ details: [addDetails] });

				console.log(store.details)
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;