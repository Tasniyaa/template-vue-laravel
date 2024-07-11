<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ActiveStatusController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\BillingTypeController;
use App\Http\Controllers\ActivationPackageController;
use App\Http\Controllers\BasicSetupController;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('save_organization', [App\Http\Controllers\OrganizationController::class, 'saveOrganization']);
Route::get('organization', [App\Http\Controllers\OrganizationController::class, 'organization']);
Route::delete('delete_organization/{id}', [App\Http\Controllers\OrganizationController::class, 'deleteOrganization']);


Route::post('save_dept', [App\Http\Controllers\DepartmentController::class, 'saveDepartment']);
Route::get('dept', [App\Http\Controllers\DepartmentController::class, 'department']);
Route::get('get_dept/{id}', [App\Http\Controllers\DepartmentController::class, 'getDepartment']);
Route::post('update_dept/{id}', [App\Http\Controllers\DepartmentController::class, 'updateDepartment']);
Route::delete('delete_dept/{id}', [App\Http\Controllers\DepartmentController::class, 'deleteDepartment']);


Route::post('save_active_status', [App\Http\Controllers\ActiveStatusController::class, 'saveActiveStatus']);
Route::get('active_status', [App\Http\Controllers\ActiveStatusController::class, 'activeStatus']);



Route::post('save_billing_type', [App\Http\Controllers\BillingTypeController::class, 'saveBillingType']);
Route::get('billing_type', [App\Http\Controllers\BillingTypeController::class, 'billingType']);



Route::post('save_activation_package', [App\Http\Controllers\ActivationPackageController::class, 'saveActivationPackage']);
Route::get('activation_package', [App\Http\Controllers\ActivationPackageController::class, 'activationPackage']);



Route::get('contacts', [App\Http\Controllers\ContactController::class, 'contacts']);
Route::get('get_contact/{id}', [App\Http\Controllers\ContactController::class, 'getContact']);
Route::post('save_contact', [App\Http\Controllers\ContactController::class, 'saveContact']);
Route::delete('delete_contact/{id}', [App\Http\Controllers\ContactController::class, 'deleteContact']);
Route::post('update_contact/{id}', [App\Http\Controllers\ContactController::class, 'updateContact']);



Route::get('basic_setup', [App\Http\Controllers\BasicSetupController::class, 'basicSetup']);
Route::post('update_basic_setup/{id}', [App\Http\Controllers\BasicSetupController::class, 'updateBasicSetup']);



