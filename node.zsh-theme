GREEN="%{$fg_bold[green]%}"
YELLOW="%{$fg_bold[yellow]%}"
CYAN="%{$fg_bold[cyan]%}"
BLUE="%{$fg[blue]%}"
RED="%{$fg_bold[red]%}"
RESET="%{$reset_color%}"

init() {
  echo -n "$GREEN"
  echo -n "⬢ "
}

nvm_statusF() {
  # [[ $SPACESHIP_NVM_SHOW == false ]] && return

  # Show NVM status only for JS-specific folders
  if [[ ! -f package.json || ! -d node_modules ]]; then
    return
  fi

  command -v nvm > /dev/null 2>&1 || return

  local nvm_status=$(nvm current 2>/dev/null)
  [[ "${nvm_status}" == "system" || "${nvm_status}" == "node" ]] && return

  # Do not show NVM prefix if prefixes are disabled
  # [[ ${SPACESHIP_PREFIX_SHOW} == true ]] && echo -n "%B${SPACESHIP_PREFIX_NVM}%b" || echo -n ' '

  echo -n "%{$fg[green]%}"
  echo -n "${nvm_status}"
  echo -n "%{$reset_color%}"
}

prompt_char() {
  echo -n "$BLUE"
  echo 'λ '
}

get_right_prompt() {
  echo -n "%{$fg[white]%}[⚐ %*]"
}

prompt() {
  init
  nvm_statusF
  echo -n " $YELLOW%c $(git_prompt_info) $RESET"
}
PROMPT='$(prompt)
$(prompt_char)'

RPROMPT='$(get_right_prompt)'

ZSH_THEME_GIT_PROMPT_PREFIX=" $CYAN"
ZSH_THEME_GIT_PROMPT_SUFFIX=""
ZSH_THEME_GIT_PROMPT_DIRTY=" $RED⦿"
ZSH_THEME_GIT_PROMPT_CLEAN=" $GREEN⦾"
