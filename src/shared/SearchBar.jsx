import React from 'react'

import { Col, Form,FormGroup} from "reactstrap";

const SearchBar = () => {
  return (
    <Col lg='12'>
        <div ClassName="search__bar">
            <Form ClassName="d-flex align-items-center gap-4">
                <FormGroup ClassName="d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-mind-map"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?"></input>
                    </div>
                </FormGroup>
                <FormGroup ClassName="d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance k/m"></input>
                    </div>
                </FormGroup>
                <FormGroup ClassName="d-flex gap-3 form__group form__group-last">
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="number" placeholder="0"></input>
                    </div>
                </FormGroup>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar;