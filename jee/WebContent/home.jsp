<!DOCTYPE HTML>
<html>
	<head>
		<title>Home</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		
	</head>
	<body>
		<img class="logo" src="assets/img/ceft_logo.png" alt="CEFT Logo">
		
		<%@ include file="./menu.jsp" %>
		
		<h2 style="font-size: xx-large; margin: 12px 4px 12px 16px"><%=((com.ceft.jee.model.Subject) request.getAttribute("subject")).getSubjectName()%></h2>
		
		<div class="question">
			<h3 class="qs_titre" style="font-size: large">Entrez votre question</h3>
			<form id="comment_form" method="post">
				<div>
					<input type="text" name="title" id="name" value="" placeholder="Votre titre" required>
				</div>
				<div>
					<textarea rows="4" name="quest" id="comment" placeholder="Votre question" required></textarea>
				</div>
				<div>
					<input type="text" name="author" id="name" value="" placeholder="Votre nom" required>
				</div>
				<div>
					<input type="submit" name="submit" value="Ajouter question">
				</div>
			</form>
		</div>
	
		<% java.util.ArrayList<com.ceft.jee.model.Question> questions = ((com.ceft.jee.model.Subject) request.getAttribute("subject")).getQuestions();%>
		
		<% for(int i = questions.size()-1; i >= 0; i--) { 
			com.ceft.jee.model.Question ques = questions.get(i);
		%>
        	
    		<div class="question">
				<h1 class="qs_titre"><%=ques.getTitle()%></h1>
		
				<div class="qs_body">
					<div class="qs_author">
						<div>
							<img class="auth_image" src="assets/img/profile_circle.png" alt="Profile Picture" >
						</div>
						<div class="auth_detail">
							<p class="auth_name"><%=ques.getAuthor()%></p>
							<p class="auth_date"><%=ques.getPublishTime()%></p>
						</div>
					</div>
					<p class="qs_text"><%=ques.getQuestion()%></p>
				</div>
		
				<div class="qs_comments">
					<p class="com_header" style="margin: 4px 4px 8px 21px;">Comments</p>
					
					<div class="com_comment">
						<h1 class="qs_titre" style="font-size: larger;">Entrez votre comment</h1>
						<form id="comment_form" method="post">
							<div>
								<input type="text" name="commenter" id="name" value="" placeholder="Votre nom" required>
							</div>
							<div>
								<textarea rows="4" name="comment" id="comment" placeholder="Votre Comment" required></textarea>
							</div>
							<div>
								<input type="submit" name="submit" value="Ajouter comment">
							</div>
							<input type="hidden" name="quest_id" value="<%=i%>">
						</form>
					</div>
					
					<% java.util.ArrayList<com.ceft.jee.model.Answer> answers = ques.getAnswers();
					
						for(int j = answers.size()-1; j >= 0; j--) {
						com.ceft.jee.model.Answer answer = answers.get(j);
					%>
					<div class="com_comment">
						<div class="qs_author">
							<div>
								<img class="auth_image" src="assets/img/profile_circle.png" alt="Profile Picture" >
							</div>
							<div class="auth_detail">
								<p class="auth_name"><%= answer.getAuthor() %></p>
								<p class="auth_date"><%= answer.getPublishTime() %></p>
							</div>
						</div>
						<p class="qs_text"><%= answer.getComment() %></p>
					</div>
					<% } %>
				</div>
			</div>
		<% } %>
		<!-- <h1>Subject ${ subject }</h1> -->
		
		<footer style="margin-top: 16px">
  			<p>CEFTiznit - <a href="mailto:ceft@uiz.ac.ma">ceft@uiz.ac.ma</a></p>
		</footer>
	</body>
</html>