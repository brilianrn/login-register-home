import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LOGIN } from '../commons/assets/images';
import { setUserDetailAsync } from '../store/actions/user.action';
import "./style/profile.style.css";

export default function Main() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userReducer.userDetail);

  useEffect(async () => {
    await dispatch(setUserDetailAsync({ id }));
  }, [])

  return (
    <div className="container card shadow rounded mb-5 form-biodata" style={{ marginTop: "90px" }}>
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              style={{ height: "200px" }}
              className="rounded-circle mt-5"
              src={userDetail?.photo ? userDetail?.photo : LOGIN} />
            <span>
            </span></div>
        </div>
        <div className="col-md-9 border-right">
          <div className="p-3 py-5">
            <h4 className="text-right">Profile Detail</h4>
            <div className="row">
              <div className="col-md-12">
                <label className="label-text">Full Name</label>
                <input type="text" className="form-control" disabled value={userDetail?.full_name} />
              </div>
              <div className="col-md-12">
                <label className="label-text">Nick Name</label>
                <input type="text" className="form-control" disabled value={userDetail?.nick_name} />
              </div>
              <div className="col-md-12">
                <label className="label-text">Email</label>
                <input type="text" className="form-control" disabled value={userDetail?.email} />
              </div>
              <div className="col-md-12">
                <label className="label-text">Date of Birth</label>
                <input type="date" className="form-control" disabled value={userDetail?.dob} />
              </div>
              <div className="col-md-12">
                <label className="label-text">Address</label>
                <input type="text" className="form-control" disabled value={userDetail?.address} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
