import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const CreateTask = (props) => {
    const [data, setData] = useState({
        task: "",
        date:"",
        desc: "",
        importance: ""
    });

    const onChangeStudentData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitStudentData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/all_student/add', data).then(res => console.log(res.data));
        setData({
            task: "",
            date:"",
            desc: "",
            importance: ""
        });
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3> Create Task</h3>
            <Form onSubmit={onSubmitStudentData}>
                <FormGroup row>
                    <Col>
                        <Label>Task </Label>
                        <Input
                            type="text"
                            name="task"
                            className="form-control"
                            value={data.task}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label> Date </Label>
                        <Input
                            type="text"
                            name="date"
                            className="form-control"
                            value={data.date}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label> Description </Label>
                        <Input
                            type="number"
                            name="desc"
                            className="form-control"
                            value={data.desc}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label> Importance </Label>
                        <Input
                            type="text"
                            name="importance"
                            className="form-control"
                            value={data.importance}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <Button color="primary"> Submit</Button>
            </Form>
        </div>
    );
}

export default CreateTask;