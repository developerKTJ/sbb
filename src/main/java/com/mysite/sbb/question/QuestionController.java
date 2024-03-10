package com.mysite.sbb.question;


import java.security.Principal;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mysite.sbb.answer.AnswerForm;
import com.mysite.sbb.user.SiteUser;
import com.mysite.sbb.user.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequestMapping("/question")
@RequiredArgsConstructor
@Controller
@Slf4j
public class QuestionController {
	
	private final QuestionService questionService;
	private final UserService userService;
	
	@GetMapping("/list")
	public String list(Model model, @PageableDefault(size=5) Pageable pagable) {
		Page<Question> questionList = this.questionService.getList(pagable);
		int sPage = Math.max(1, questionList.getPageable().getPageNumber() - 4);
		int ePage = Math.min(questionList.getTotalPages(), questionList.getPageable().getPageNumber() + 4 );
		model.addAttribute("sPage", sPage);
		model.addAttribute("ePage", ePage);
		model.addAttribute("questionList",questionList);
		return "question_list";
	}
	
	@GetMapping(value = "/detail/{id}")
    public String detail(Model model, @PathVariable("id") Integer id, AnswerForm answerForm) {
		Question question = this.questionService.getQuestion(id);
        model.addAttribute("question", question);
        return "question_detail";
    }
	
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/create")
    public String questionCreate(QuestionForm questionForm) {
        return "question_form";
    }
	
	@PreAuthorize("isAuthenticated()")
	@PostMapping("/create")
    public String questionCreate(@Valid QuestionForm questionForm, BindingResult bindingResult, Principal principal) {
		if (bindingResult.hasErrors()) {
            return "question_form";
        }
		SiteUser siteUser = this.userService.getUser(principal.getName());
		this.questionService.create(questionForm.getSubject(), questionForm.getContent(), siteUser);
        return "redirect:/question/list"; // 질문 저장후 질문목록으로 이동
    }
}
