import React from 'react';
import { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { customerList } from '../store/actions/user.action';

export default function Main() {
  const dispatch = useDispatch();

  const listCustomer = useSelector((state) => state.userReducer.customers);

  useEffect(async () => {
    await dispatch(customerList());

    await console.log(listCustomer)
  }, [])

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
                    {customer.full_name}
                  </div>
                  <div class="col-3">
                    <div class="row">
                      <div class="col">
                        <div className="btn btn-primary w-100">Approve</div>
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
