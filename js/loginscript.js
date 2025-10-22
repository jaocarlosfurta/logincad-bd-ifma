document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form-login');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            
            if (!email || !senha) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            alert('Login realizado com sucesso!');
        });
    }

    const cadastroForm = document.querySelector('.form-cadastro');
    
    if (cadastroForm) {
        const senha = document.getElementById('senha');
        const confirmarSenha = document.getElementById('confirmar-senha');

        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (senha.value !== confirmarSenha.value) {
                alert('As senhas não coincidem!');
                senha.focus();
                return;
            }
            
            const tipoUsuario = document.querySelector('input[name="tipo-usuario"]:checked');
            if (!tipoUsuario) {
                alert('Por favor, selecione um tipo de usuário!');
                return;
            }
            
            alert('Cadastro realizado com sucesso!');
            cadastroForm.reset();
        });

        const radioOptions = document.querySelectorAll('.radio-option');
        radioOptions.forEach(option => {
            option.addEventListener('click', function() {
                radioOptions.forEach(opt => opt.style.borderColor = '#e1e5e9');
                this.style.borderColor = '#000000';
                this.style.background = '#f5f5f5';
            });
        });
    }
});