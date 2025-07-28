import { Component } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { UtilsService } from '../../../services/utils.service';
import { Router } from '@angular/router';
import { MenuComponent } from "../../../components/menu/menu.component";

@Component({
  selector: 'app-gerenc-users',
  imports: [TableComponent, MenuComponent],
  templateUrl: './gerenc-users.component.html',
  styleUrl: './gerenc-users.component.scss',
})
export class GerencUsersComponent {
  users: User[] = [];

  columns = [
    { field: 'name', header: 'Nome', sortable: true },
    { field: 'username', header: 'Username', sortable: true },
    { field: 'role', header: 'Cargo', sortable: true },
    { field: 'email', header: 'Email', sortable: false },
  ];

  loading: boolean = true;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private utilsService: UtilsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  logout() {
    this.authService.logout();
  }

  loadUsers(): void {
    this.loading = true;
    this.usersService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar os usuários:', error);
        this.loading = false;
      },
    });
  }

  onRowSelect(event: any) {}

  redirectToEdit(userId: string) {
    this.router.navigateByUrl('/edit-user/' + userId);
  }

  deleteUser(userId: string): void {
    this.usersService.deleteUser(userId).subscribe({
      next: () => {
        this.utilsService.presentToast(
          'success',
          'Sucesso',
          'Usuário excluído com sucesso!',
          3000
        );
        this.loadUsers();
      },
      error: (error) => {
        this.utilsService.presentToast(
          'error',
          'Erro',
          'Não foi possível excluir o produto',
          3000
        );
      },
    });
  }
}
