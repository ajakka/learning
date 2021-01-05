package com.ceft.jee.model;

import java.util.ArrayList;
import java.util.Arrays;

public class Subject {
	private String subjectName = "";
	private ArrayList<Question> questions = new ArrayList<Question>();
	
	public Subject(String subjectName, Question[] questions) {
		this.subjectName = subjectName;
		this.questions = new ArrayList<>(Arrays.asList(questions));
	}

	public String getSubjectName() {
		return subjectName;
	}
	
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	
	public ArrayList<Question> getQuestions() {
		return questions;
	}
	
	public void addQuestion(Question question) {
		this.questions.add(question);
	}

	@Override
	public String toString() {
		return "Subject [subjectName=" + subjectName + ", questions=" + questions.toString() + "]";
	}
}
