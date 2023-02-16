import React, { useState, useEffect } from "react";
import "./Home.css";

function FoData() {
  // empty object
  const empty = {
    name: "",
    Description: "",
    date: "",
    time: "",
    St: "",
  };
  const [appidata, setappidata] = useState([]);
  const [fdata, setfdata] = useState(empty);
  const [name, setname] = useState("");
  const [id, setid] = useState("");
  const [Description, SetDescription] = useState("");
  const [date, SetDate] = useState("");
  const [time, SetTime] = useState("");
  const [St, SetSt] = useState("");

  const OnclickHandler = (event) => {
    const { name, value } = event.target;
    //  console.log({[name]:value})
    setfdata({ ...fdata, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:4000/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fdata),
    });
    setfdata(empty);
    console.log(fdata);
  };
  //get from database
  const getapi = async () => {
    const show = await fetch("http://localhost:4000/get");
    setappidata(await show.json());
    getapi();
  };
  //Delete data from database
  const deletedata = async (id) => {
    await fetch(`http://localhost:4000/delete/${id}`, {
      method: "Delete",
    });
  };
  //UPDATE
  const postData = (data) => {
    console.log(data._id);
    setid(data._id);
    setname(data.name);
    // console.log(data.name);
    SetDescription(data.Description);
    SetDate(data.date);
    SetTime(data.time);
    SetSt(data.St);
  };
  //UPDATE
  //
  const update = async () => {
    let item = { name, Description, date, time, St };
    console.warn(name);
    await fetch(`http://localhost:4000/update/${id}`, {
      method: "PUT",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
  };
  //

  useEffect(() => {
    getapi();
  }, []);

  return (
    <div className="container-fluid fodatacontaine">
      <div className="Container">
        <div className="row">
          <div className="col-md-12 container-fluid">
            <div class="d-flex align-items-start">
              {/* navbar link element */}
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
              >
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Home
                </button>
                <button
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Add Activites
                </button>
                <button
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Show Activites
                </button>
              </div>
              <div class="tab-content" id="v-pills-tabContent">
                {/* <div class="tab-pane fade show active text-white" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">hello</div> */}
                {/* form in navbar */}
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  {/* Form */}
                  <form className="form-control fromst bg-primary ">
                    <div className="form-row ">
                      <div className="form-group col-md-12">
                        <label className="text-uppercase text-light fs-6">
                          Name
                        </label>
                        <input
                          type="text"
                          onChange={OnclickHandler}
                          value={fdata.name}
                          name="name"
                          className="form-control border"
                          id="inputEmail4"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div className="from-row">
                      <div className="form-group col-md-12">
                        <label className="text-uppercase text-light fs-6">
                          Discription
                        </label>
                        <textarea
                          onChange={OnclickHandler}
                          className="border"
                          value={fdata.Description}
                          cols={50}
                          name="Description"
                          form="usrform"
                          placeholder="Enter Discription"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="text-uppercase text-light fs-6">
                        Date
                      </label>
                      <input
                        type="date"
                        onChange={OnclickHandler}
                        value={fdata.date}
                        name="date"
                        className="form-control "
                        id="inputAddress"
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-uppercase text-light fs-6">
                        Time
                      </label>
                      <input
                        type="time"
                        onChange={OnclickHandler}
                        value={fdata.time}
                        name="time"
                        className="form-control border"
                        id="inputAddress"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label className="text-uppercase text-light fs-6">
                          State
                        </label>
                        <select
                          id="inputState"
                          onChange={OnclickHandler}
                          value={fdata.St}
                          name="St"
                          className="form-control border"
                        >
                          <option selected>Choose...</option>
                          <option
                            onChange={OnclickHandler}
                            name="St"
                            value="..."
                          >
                            ...
                          </option>
                          <option
                            onChange={OnclickHandler}
                            name="St"
                            value="Run"
                          >
                            Run
                          </option>
                          <option
                            onChange={OnclickHandler}
                            name="St"
                            value="Walk"
                          >
                            Walk
                          </option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      onClick={submit}
                      className="btn btn-dark"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  {/* Take form that update data */}
                  <div className="container-fluid">
                    <div className="col-md-12">
                      {/* <div className='form-control'>
      <label> <h1>NAME</h1></label>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
      <label> <h1>Description</h1></label>
      <input type="text" value={Description} onChange={(e)=>SetDescription(e.target.value)}/>
    </div> */}
                      <div className="form-group col-md-12">
                        <label className="text-uppercase text-light fs-6">
                          Name
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setname(e.target.value)}
                          value={name}
                          name="name"
                          className="form-control border"
                          id="inputEmail4"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label className="text-uppercase text-light fs-6">
                          Description
                        </label>
                        <input
                          type="text "
                          onChange={(e) => SetDescription(e.target.value)}
                          value={Description}
                          name="name"
                          className="form-control border"
                          id="inputEmail4"
                          placeholder="update Description"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label className="text-uppercase text-light fs-6">
                          Date
                        </label>
                        <input
                          type="date"
                          onChange={(e) => SetDate(e.target.value)}
                          value={date}
                          name="name"
                          className="form-control border"
                          id="inputEmail4"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label className="text-uppercase text-light fs-6">
                          time
                        </label>
                        <input
                          type="time"
                          onChange={(e) => SetTime(e.target.value)}
                          value={time}
                          name="name"
                          className="form-control border"
                          id="inputEmail4"
                        />
                      </div>
                      <div className="form-group col-md-12 col-sm-3">
                        <label className="text-uppercase text-light fs-6">
                          State
                        </label>
                        <input
                          type="text"
                          onChange={(e) => SetSt(e.target.value)}
                          value={St}
                          name="name"
                          className="form-control border"
                          id="inputEmail4"
                        />
                      </div>
                      <div className="form-group col-md-12 text-center ">
                        <button className="btn btn-primary" onClick={update}>
                          UPDATE
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="Container-fluid">
                    <div className="row d-flex justify-content-center container-fluid">
                      {appidata.map((value) => {
                        return (
                          // <div className='col-4'>
                          //   <h1>{value.name}</h1>
                          // </div>
                          <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body  bg-dark">
                              <h5 className="card-title text-capitalize text-light fs-6">
                                NAME: {value.name}
                              </h5>
                              <p className="card-text text-capitalize text-light fs-6">
                                DESCRIPTION:{value.Description}
                              </p>
                              <p className="card-text text-capitalize text-light fs-6">
                                DATE:{value.date}
                              </p>
                              <p className="card-text text-capitalize text-light fs-6">
                                TIME:{value.time}
                              </p>
                              <p className="card-text text-capitalize text-light fs-6">
                                STATE:{value.St}
                              </p>
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  deletedata(value._id);
                                }}
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  postData(value);
                                }}
                              >
                                UPDDATE
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoData;
