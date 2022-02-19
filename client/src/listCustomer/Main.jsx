import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { approveCustomerAsync, customerList, setUserDetail, setUserDetailAsync } from '../store/actions/user.action';

export default function Main() {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);

  const listCustomer = useSelector((state) => state.userReducer.customers);

  useEffect(async () => {
    await dispatch(customerList());
  }, [flag])

  async function approve({ event, id }) {
    event.preventDefault();
    await approveCustomerAsync({ id });
    location.reload();

    if (!flag) {
      await setFlag(true);
    } else {
      await setFlag(false);
    }
  }

  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <p className="h2">List Customer</p>
      <Card className="w-100 mt-4">
        <ListGroup variant="flush">
          {listCustomer?.map(customer => {
            return (
              <ListGroup.Item>
                <div class="row">
                  <div class="col-9">
                    <Link to={`/profile/${customer.id}`} className="text-decoration-none text-dark">
                      {customer.full_name}
                    </Link>
                  </div>
                  <div class="col-3">
                    <div class="row">
                      <div class="col">
                        <div className="btn btn-primary w-100" onClick={(event) => approve({ event, id: customer.id })}>Approve</div>
                      </div>
                      <div class="col">
                        <div className="btn btn-danger w-100">Decline</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Card>
    </div>
  )
}
