import React from "react";

import { render, cleanup, getByAltText, fireEvent } from "@testing-library/react";

import Form from "components/Appointment/Form";

afterEach(cleanup);

describe("Form", () => {
  const interviewers = [
    {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];

  /* two ways to access student name input element to find same 
  element in DOM (getTestID and getPlacehodlerText (we would typically use this one though in tests))
  
  */

  it("renders without student name if not provided", () => {
    const { getByPlaceholderText } = render(
      <Form interviewers={interviewers} />
    );
    expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
  });

  it("renders with initial student name", () => {
    const { getByTestId } = render(
      <Form interviewers={interviewers} student="Lydia Miller-Jones" />
    );
    expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
  });

  it("validates that the student name is not blank", () => {
    /* 1. create the mock onSave function */
    const onSave = jest.fn();

    /* 2. Render the Form with interviewers and the onSave mock function passed as an onSave prop, the name prop should be blank or undefined */
    const { getByText } = render(
      <Form interviewers={interviewers} onSave={onSave} />
    );

    /* 3. Click the save button */
    fireEvent.click(getByText("Save"));

    /* A) validation is shown */
    expect(getByText(/student name cannot be blank/i)).toBeInTheDocument();
    /* B) onSave is not called */
    expect(onSave).not.toHaveBeenCalled();
  });
  

  it("calls onSave function when the student and interviewer names are defined", () => {
      /* 1. Create the mock onSave function */
      const onSave = jest.fn();

      /* 2. Render the Form with interviewers, name and the onSave mock function passed as an onSave prop */
      const { getByText, queryByText, getByAltText } = render(
        <Form interviewers={interviewers} onSave={onSave} student="Lydia Miller-Jones" />
      );

      fireEvent.click(getByAltText("Sylvia Palmer"));
      
      /* 3. Click the save button */
      fireEvent.click(getByText("Save"));

    /* C) validation is not shown */
    expect(queryByText(/student name cannot be blank/i)).toBeNull();
    /* D) onSave is called once*/
    expect(onSave).toHaveBeenCalledTimes(1);
    /* E) onSave is called with the correct arguments */
    expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", 1);
  });












});