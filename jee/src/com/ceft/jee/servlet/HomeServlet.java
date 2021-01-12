package com.ceft.jee.servlet;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ceft.jee.model.Answer;
import com.ceft.jee.model.Question;
import com.ceft.jee.model.Subject;

@WebServlet("/home")
public class HomeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private HashMap<String, Subject> subjects = new HashMap<String, Subject>();
	
    public HomeServlet() {
        super();
        setInitialSubjects();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String selectedSubject = request.getParameter("s");
		
		if(selectedSubject == null || selectedSubject == "") {
			selectedSubject = "common";
		}
		Subject subject = subjects.get(selectedSubject);
		request.setAttribute("subject", subject);
		request.getRequestDispatcher("/home.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String selectedSubject = request.getParameter("s");
		if(selectedSubject == null || selectedSubject == "") {
			selectedSubject = "common";
		}
		Subject subject = subjects.get(selectedSubject);
		
		String quest_id = request.getParameter("quest_id");
		// if the POST request comes from a commenter, then there will be a question id sent
		if(quest_id != null) {
			String commenter = request.getParameter("commenter");
			String comment = request.getParameter("comment");
			
			int qid = Integer.parseInt(quest_id);
			subject.getQuestions().get(qid).addAnswer(new Answer(commenter, comment, System.currentTimeMillis()));
		}
		else {
			String title = request.getParameter("title");
			String question = request.getParameter("quest");
			String author = request.getParameter("author");
			
			if(title != null && question != null && author != null) {
				subject.getQuestions().add(new Question(title, author, question, System.currentTimeMillis(), new Answer[] {}));
			}
		}
		
		
		
		
		doGet(request, response);
	}

	public void setInitialSubjects(){
		Subject common = new Subject(
				"Question commune",
				new Question[] {
					new Question("Où se trouve le CEFT",
							"Marouane",
							"Où se trouve le Centre d'Etude et de Formation Tiznit",
							1601061278352L,
							new Answer[] {
								new Answer("Khadija","https://goo.gl/maps/8Me53SYru5XZRste9",1601061279352L ),
								new Answer("Ahmed","A Tiznit",1601061278952L )}
					)
				}
		);
		
		Subject android = new Subject(
				"M27 Programmation Mobile", 
				new Question[] {
					new Question("TextView ne fonctionne pas",
							"Abderrahim",
							"J\'utilise TextView mais cela ne fonctionne pas",
							1601061278352L,
							new Answer[] {
								new Answer("Ahmed","Utilize la balize <TextView>",1601061279352L ), 
								new Answer("Khaled","Mois aussi", 1601061281352L), 
								new Answer("Khaled","Chercher Stackoverflow", 1601061282352L)}
					),
					new Question("Comment passer d\'une activite a une autre", 
							"Khaled",
							"Comment passer d\'une activite a une autre",
							1601061178352L,
							new Answer[] {
								new Answer("Ahmed","Utilize les intent",1601061188352L ),
								new Answer("Khaled","Chercher Stackoverflow", 1601061198352L)}
					)
				}
		);

		Subject ro = new Subject(
				"M28 Recherch Operationnelle", 
				new Question[] {
					new Question("TP de Programmation Lineaire?",
							"Abderrahim",
							"Quelqu\'un a fait le TP de Programmation Lineaire?",
							1601061278352L,
							new Answer[] {
								new Answer("Khadija","Oui je l'ai fait",1601061279352L ), 
								new Answer("Amine","C'était trop compliqué pour moi", 1601061281352L)}
					),
					new Question("Théorie des Graphes", 
							"Kamal",
							"Quel est la Theorie des Graphes",
							1601061178352L,
							new Answer[] {
								new Answer("Amal","La théorie des graphes est la discipline mathématique et informatique qui étudie les graphes, lesquels sont des modèles abstraits de dessins de réseaux reliant des objets",1601061188352L )}
					)
				}
		);

		Subject oop = new Subject(
				"M29 Programmation Orientee Objets Avancee", 
				new Question[] {
					new Question("Caractéristiques du langage Java",
							"Abderrahim",
							"Orienté objet\nJava est fortement type\nFiable\nIndependant de toute plate-forme.",
							1601061278352L,
							new Answer[] {
								new Answer("Kamal","Merci",1601061279352L ), 
								new Answer("Khaled","Merci bq", 1601061281352L)}
					)
				}
		);

		Subject network = new Subject(
				"M30 Reseaux 2", 
				new Question[] {
					new Question("Quel est le TCP/IP",
							"Fatima",
							"c'est quoi le TCP/IP",
							1601061278352L,
							new Answer[] {
								new Answer("Brahim","Le protocole TCP/IP (Transmission Control Protocol/Internet Protocol) réunit les deux protocoles TCP et IP. Il s'agit donc d'une suite de protocoles associée au domaine d'Internet pour lequel elle facilite le transfert de données.",1601061279352L ), 
								new Answer("Fatima","Merci brahim", 1601061281352L)}
					)
				}
		);

		Subject law = new Subject(
				"M32 Entreprenariat et Droit de l\'Informatique", 
				new Question[] {}
		);

		Subject ai = new Subject(
				"M33 Introduction a l\'Intelligence Artificielle", 
				new Question[] {}
		);

		Subject jee = new Subject(
				"M34 Technologies Web Avancees (JEE)", 
				new Question[] {}
		);

		Subject ad = new Subject(
				"M35 Analyse de Donnees", 
				new Question[] {}
		);

		Subject stage = new Subject(
				"M36 Stage", 
				new Question[] {}
		);

		subjects.put("common", common);
		subjects.put("android", android);
		subjects.put("ro", ro);
		subjects.put("oop", oop);
		subjects.put("network", network);
		subjects.put("law", law);
		subjects.put("ai", ai);
		subjects.put("jee", jee);
		subjects.put("ad", ad);
		subjects.put("stage", stage);
	}
	
}


